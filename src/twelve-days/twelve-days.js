
class TwelveDays {
  constructor() {
    this.days = [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth',
      'seventh',
      'eighth',
      'ninth',
      'tenth',
      'eleventh',
      'twelfth'
    ]

    this.gifts = [
      'twelve Drummers Drumming', 'eleven Pipers Piping', 'ten Lords-a-Leaping',
      'nine Ladies Dancing', 'eight Maids-a-Milking', 'seven Swans-a-Swimming', 'six Geese-a-Laying', 'five Gold Rings',
      'four Calling Birds', 'three French Hens', 'two Turtle Doves', 'a Partridge in a Pear Tree'
    ]
  }
  sing() {
    let dayGift;
    for (let day in this.days) {
      dayGift = this.getDayGift(day, dayGift);
      console.log(`On the ${this.days[day]} day of Christmas my true love gave to me,${dayGift}.`);
    }
  }

  getDayGift(day, previous) {
    const last = this.gifts.length - 1;
    if (day == 0) {
      return ` ${this.gifts[last]}`;
    }

    if (day == 1) {
      previous = `and${previous}`;
    }

    return ` ${this.gifts[last - day]}, ${previous}`;
  }
}

const song = new TwelveDays();
song.sing();