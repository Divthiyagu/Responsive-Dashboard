export async function fetchWidgetData() {
  // simulate async API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        line: [
          { label: 'Jan', value: 30 },
          { label: 'Feb', value: 40 },
          { label: 'Mar', value: 35 },
          { label: 'Apr', value: 50 },
          { label: 'May', value: 60 },
        ],
        bar: [
          { label: 'Q1', value: 100 },
          { label: 'Q2', value: 150 },
          { label: 'Q3', value: 130 },
          { label: 'Q4', value: 200 },
        ],
        pie: [
          { label: 'Male', value: 60 },
          { label: 'Female', value: 35 },
          { label: 'Others', value: 5 },
        ],
        activity: [
          { user: 'John', action: 'Logged in', time: '2 min ago' },
          { user: 'Alice', action: 'Updated settings', time: '10 min ago' },
          { user: 'Bob', action: 'Viewed dashboard', time: '1 hour ago' },
        ],
      });
    }, 1000);
  });
}
