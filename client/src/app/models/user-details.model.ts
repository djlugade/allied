export class UserDetails {
    constructor(
        public userDate: string,
        public fromLocation: string,
        public dropLocation: string,
        public pickupFloor: number,
        public dropFloor: number,
        public elevatorPickupLoc: string,
        public elevatorDropLoc: string,
        public relocation: string,
        public bhk: string
    // tslint:disable-next-line:one-line
    ){}
}
