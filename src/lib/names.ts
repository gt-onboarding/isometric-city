// Name generation utilities for cities and water bodies
import { msg } from 'gt-next';

const CITY_NAME_PARTS = [
  msg('Spring'), msg('Riverside'), msg('Harbor'), msg('Valley'), msg('Hill'), msg('Bay'), msg('Creek'), msg('Park'),
  msg('Lake'), msg('Mountain'), msg('Beach'), msg('Forest'), msg('Bridge'), msg('Port'), msg('View'), msg('Heights'),
  msg('Grove'), msg('Meadow'), msg('Ridge'), msg('Point'), msg('Falls'), msg('Brook'), msg('Pine'), msg('Oak'),
  msg('Maple'), msg('Cedar'), msg('Elm'), msg('Willow'), msg('Ash'), msg('Birch'), msg('Green'), msg('Blue'),
  msg('White'), msg('Black'), msg('Red'), msg('New'), msg('Old'), msg('East'), msg('West'), msg('North'), msg('South'),
  msg('Grand'), msg('Little'), msg('Big'), msg('Upper'), msg('Lower'), msg('Central'), msg('Fair'), msg('Bright'),
  msg('Sunny'), msg('Clear'), msg('Rock'), msg('Stone'), msg('Iron'), msg('Gold'), msg('Silver'), msg('Copper'),
  msg('Mill'), msg('Town'), msg('City'), msg('Ville'), msg('Burg'), msg('Field'), msg('Land'), msg('Wood'),
];

const CITY_SUFFIXES = [
  msg('City'), msg('Town'), msg('Ville'), msg('Burg'), msg('Port'), msg('Harbor'), msg('Bay'), msg('Beach'),
  msg('Park'), msg('Heights'), msg('Hills'), msg('Valley'), msg('Ridge'), msg('Point'), msg('Falls'),
  msg('Springs'), msg('Grove'), msg('Meadow'), msg('Field'), msg('Woods'), msg('Lake'), msg('River'),
];

const LAKE_NAMES = [
  msg('Pine Lake'), msg('Crystal Lake'), msg('Emerald Lake'), msg('Blue Lake'), msg('Clear Lake'),
  msg('Silver Lake'), msg('Golden Lake'), msg('Mountain Lake'), msg('Forest Lake'), msg('Sunset Lake'),
  msg('Sunrise Lake'), msg('Moon Lake'), msg('Star Lake'), msg('Mirror Lake'), msg('Reflection Lake'),
  msg('Tranquil Lake'), msg('Serene Lake'), msg('Peaceful Lake'), msg('Still Lake'), msg('Calm Lake'),
  msg('Deep Lake'), msg('Shallow Lake'), msg('Hidden Lake'), msg('Secret Lake'), msg('Lost Lake'),
  msg('Wild Lake'), msg('Bear Lake'), msg('Eagle Lake'), msg('Deer Lake'), msg('Wolf Lake'),
  msg('Trout Lake'), msg('Bass Lake'), msg('Salmon Lake'), msg('Perch Lake'), msg('Pike Lake'),
  msg('Lily Lake'), msg('Lotus Lake'), msg('Willow Lake'), msg('Oak Lake'), msg('Maple Lake'),
  msg('Cedar Lake'), msg('Birch Lake'), msg('Spruce Lake'), msg('Fir Lake'),
  msg('Misty Lake'), msg('Foggy Lake'), msg('Cloudy Lake'), msg('Bright Lake'), msg('Shimmer Lake'),
  msg('Sparkle Lake'), msg('Glitter Lake'), msg('Diamond Lake'), msg('Pearl Lake'), msg('Jade Lake'),
];

const OCEAN_NAMES = [
  msg('Pacific Ocean'), msg('Atlantic Ocean'), msg('Arctic Ocean'), msg('Indian Ocean'),
  msg('Southern Ocean'), msg('Mediterranean Sea'), msg('Caribbean Sea'), msg('North Sea'),
  msg('Baltic Sea'), msg('Black Sea'), msg('Red Sea'), msg('Caspian Sea'), msg('Aral Sea'),
  msg('Bering Sea'), msg('Sea of Japan'), msg('East China Sea'), msg('South China Sea'),
  msg('Yellow Sea'), msg('Philippine Sea'), msg('Coral Sea'), msg('Tasman Sea'), msg('Arabian Sea'),
  msg('Bay of Bengal'), msg('Gulf of Mexico'), msg('Persian Gulf'), msg('Gulf of Alaska'),
  msg('Hudson Bay'), msg('Baffin Bay'), msg('Davis Strait'), msg('Denmark Strait'),
  msg('Great Bay'), msg('Grand Bay'), msg('Royal Bay'), msg('Majestic Bay'), msg('Noble Bay'),
  msg('Ancient Sea'), msg('Eternal Sea'), msg('Endless Sea'), msg('Boundless Sea'), msg('Vast Sea'),
  msg('Infinite Sea'), msg('Crystal Sea'), msg('Emerald Sea'), msg('Sapphire Sea'), msg('Azure Sea'),
  msg('Turquoise Sea'), msg('Northern Sea'), msg('Southern Sea'), msg('Eastern Sea'), msg('Western Sea'),
];

export function generateCityName(): string {
  const part1 = CITY_NAME_PARTS[Math.floor(Math.random() * CITY_NAME_PARTS.length)];
  const part2 = CITY_NAME_PARTS[Math.floor(Math.random() * CITY_NAME_PARTS.length)];
  const suffix = CITY_SUFFIXES[Math.floor(Math.random() * CITY_SUFFIXES.length)];
  
  // Sometimes use two parts, sometimes one part + suffix
  if (Math.random() > 0.5) {
    return `${part1} ${suffix}`;
  } else {
    // Avoid duplicate parts
    if (part1 === part2) {
      return `${part1} ${suffix}`;
    }
    return `${part1}${part2} ${suffix}`;
  }
}

export function generateWaterName(type: 'lake' | 'ocean'): string {
  const filtered = type === 'lake' ? LAKE_NAMES : OCEAN_NAMES;
  return filtered[Math.floor(Math.random() * filtered.length)];
}
