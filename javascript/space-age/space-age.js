const PLANET_YEAR_TO_EARTH_YEAR = new Map([
  ['mercury', 0.2408467],
  ['venus', 0.61519726],
  ['earth', 1.0],
  ['mars', 1.8808158],
  ['jupiter', 11.862615],
  ['saturn', 29.447498],
  ['uranus', 84.016846],
  ['neptune', 164.79132],
]);

const EARTH_YEAR_IN_SECOND = 31557600;

export const age = (planet, seconds) => {
  const earthYears = seconds / EARTH_YEAR_IN_SECOND;
  const planetYears = earthYears / PLANET_YEAR_TO_EARTH_YEAR.get(planet);

  return Number(planetYears.toFixed(2));
};
