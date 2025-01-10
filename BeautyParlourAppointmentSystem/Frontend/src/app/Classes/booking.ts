export class Booking {
    course: {
        courseId: number;
    } | undefined;
      client: {
          clientId: number;
      } | undefined;
      bookingStatus: string | undefined;
      bookingDate: Date | undefined;
}
