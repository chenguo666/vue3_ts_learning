let BASE_URL = '';
let BASE_NAME = '';
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://coderwhy.org/dev';
  BASE_NAME = 'fruitchan';
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/dev';
  BASE_NAME = 'fruitchan';
}
export { BASE_URL, BASE_NAME };
