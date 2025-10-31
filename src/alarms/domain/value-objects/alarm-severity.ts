export class AlarmSeverity {
  readonly value: 'critical' | 'high' | 'medium' | 'low';

  constructor(value: string) {
    if (!['critical', 'high', 'medium', 'low'].includes(value)) {
      throw new Error(`Invalid severity value: ${value}`);
    }

    this.value = value as 'critical' | 'high' | 'medium' | 'low';
  }

  equals(severity: AlarmSeverity): boolean {
    return this.value === severity.value;
  }
}
