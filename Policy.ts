import { User } from './User';

export class Policy {
    private baseno: number = 100;

    constructor(
        public pid: string,
        public user: User,
        public amount: number
    ) {}

    calculatePremium(): number {
        let premium = this.baseno;
        if (this.user.age < 25) {
            premium += 50;
        } else if (this.user.age > 60) {
            premium += 100;
        }

        if (this.amount > 500000) {
            premium += 200;
        }

        return premium;
    }
}

const user1 = new User(1, 'hari', 22);
const user2 = new User(2, 'kishore', 45);
const user3 = new User(3, 'abc', 65);

const policy1 = new Policy('POL001', user1, 300000);
const policy2 = new Policy('POL002', user2, 600000);


console.log(`Premium for ${user1.name}: ${policy1.calculatePremium()}`);
console.log(`Premium for ${user2.name}: ${policy2.calculatePremium()}`);