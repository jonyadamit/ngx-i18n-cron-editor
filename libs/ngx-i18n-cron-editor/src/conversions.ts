export function days(abbrv: string) {
  switch (abbrv) {
    case 'SUN':
      return $localize`Sunday`;
    case 'MON':
      return $localize`Monday`;
    case 'TUE':
      return $localize`Tuesday`;
    case 'WED':
      return $localize`Wednesday`;
    case 'THU':
      return $localize`Thursday`;
    case 'FRI':
      return $localize`Friday`;
    case 'SAT':
      return $localize`Saturday`;
    default:
      return abbrv;
  }
}

export function monthWeeks(note: string) {
  switch (note) {
    case '#1':
      return $localize`First`;
    case '#2':
      return $localize`Second`;
    case '#3':
      return $localize`Third`;
    case '#4':
      return $localize`Fourth`;
    case '#5':
      return $localize`Fifth`;
    case 'L':
      return $localize`Last`;
    default:
      return note;
  }
}

export function months(month: number) {
  switch (month) {
    case 1:
      return $localize`January`;
    case 2:
      return $localize`February`;
    case 3:
      return $localize`March`;
    case 4:
      return $localize`April`;
    case 5:
      return $localize`May`;
    case 6:
      return $localize`June`;
    case 7:
      return $localize`July`;
    case 8:
      return $localize`August`;
    case 9:
      return $localize`September`;
    case 10:
      return $localize`October`;
    case 11:
      return $localize`November`;
    case 12:
      return $localize`December`;
  }
}
