export const meetup = (
  year: number,
  month: number,
  weekDescriptor: string,
  dayOfWeek: string
) => {
  // Determine the number of days in the month
  const daysInMonth = new Date(year, month, 0).getDate();
  const days: Date[] = [];

  // Iterate through the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const currentDate = new Date(year, month - 1, day); // month - 1 because month indices start from 0
    // Check if the current day matches the given day of the week
    if (
      currentDate.getDay() ===
      [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ].indexOf(dayOfWeek)
    ) {
      days.push(currentDate);
    }
  }

  let meetupDate: Date;

  // Handle different week descriptors
  switch (weekDescriptor) {
    case "first":
      meetupDate = days[0];
      break;
    case "second":
      meetupDate = days[1];
      break;
    case "third":
      meetupDate = days[2];
      break;
    case "fourth":
      meetupDate = days[3];
      break;
    case "last":
      meetupDate = days[days.length - 1];
      break;
    case "teenth":
      meetupDate = days.find(
        (date) => date.getDate() >= 13 && date.getDate() <= 19
      )!;
      break;
    default:
      throw new Error("Invalid week descriptor");
  }

  if (!meetupDate) {
    throw new Error("No meetup date found");
  }

  return meetupDate;
};

// Example usage
console.log(meetup(2013, 5, "teenth", "Monday")); // Should output the first Monday of May 2013
