export class Session {
  title: string;
  startTime: string;
  endTime: string;
  venue: string;
  track: string;


  constructor(title: string, startTime: string, endTime: string, venue: string, track: string) {
    this.title = title;
    this.startTime = startTime;
    this.endTime = endTime;
    this.venue = venue;
    this.track = track;
  }
}
