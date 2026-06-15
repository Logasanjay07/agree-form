import os
import urllib.request

candidates = {
    'corn-field': [
        'https://images.pexels.com/photos/20234940/pexels-photo-20234940.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    'paddy-field': [
        'https://images.pexels.com/photos/15689799/pexels-photo-15689799.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/34889936/pexels-photo-34889936.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/548151/pexels-photo-548151.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    'goat-farm': [
        'https://images.pexels.com/photos/1444480/pexels-photo-1444480.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2422645/pexels-photo-2422645.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    'mango-orchard': [
        'https://images.pexels.com/photos/11199501/pexels-photo-11199501.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1069883/pexels-photo-1069883.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    'onion': [
        'https://images.pexels.com/photos/931160/pexels-photo-931160.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8403/food-vegetables-onion-ingredients.jpg?auto=compress&cs=tinysrgb&w=1200',
    ],
    'chilli': [
        'https://images.pexels.com/photos/1092750/pexels-photo-1092750.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1580081/pexels-photo-1580081.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    'rice-field': [
        'https://images.pexels.com/photos/150841/pexels-photo-150841.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
}

os.makedirs('src/assets', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0'}

for name, urls in candidates.items():
    path = os.path.join('src', 'assets', f'{name}.jpg')
    if os.path.exists(path):
        print(f'Skipping {name}, already exists: {path}')
        continue

    for url in urls:
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=30) as resp:
                data = resp.read()
                print(f'{name}: {resp.status} {resp.geturl()} {len(data)} bytes')
            with open(path, 'wb') as f:
                f.write(data)
            print(f'Saved {path}')
            break
        except Exception as exc:
            print(f'ERROR {name} from {url}: {exc}')
    else:
        print(f'FAILED {name}: no working URL')
