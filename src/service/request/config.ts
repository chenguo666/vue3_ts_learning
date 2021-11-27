let BASE_URL = '';
let TIME_OUT = 10000;
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/';
  // BASE_URL = 'http://152.136.185.210:4000/';
  TIME_OUT = 10000;
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://123.207.32.32:8000/';
  TIME_OUT = 5000;
}
export { BASE_URL, TIME_OUT };
