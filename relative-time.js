const time = new Intl.RelativeTimeFormat('en', {  // 'fr'
  numeric: 'auto'
});

time.format(1, 'days'); // tomorrow
time.format(-1, 'days'); // yesterday
time.format(22, 'day'); // in 22 days

time.format(1, 'month'); // next month
time.format(-1, 'month'); // last month
time.format(0, 'month'); // this month
time.format(10, 'month'); // in 10 months

time.format(-1, 'quarter'); // last quarter
time.format(-1, 'seconds'); // 1 second ago
time.format(0, 'seconds'); // auto, now

// https://www.youtube.com/shorts/MaMzqtHH7pY
