type SeverityValue = 'critical' | 'high' | 'medium' | 'low';

const VALID_SEVERITIES: readonly SeverityValue[] = ['critical', 'high', 'medium', 'low'] as const;

export class AlarmSeverity {
  readonly value: SeverityValue;

  constructor(value: string) {
    if (!this.isValidSeverity(value)) throw new Error(`Invalid severity value: ${value}`);

    this.value = value;
  }

  equals(severity: AlarmSeverity): boolean {
    return this.value === severity.value;
  }

  /*
   *   private method
   */
  private isValidSeverity(value: string): value is SeverityValue {
    return VALID_SEVERITIES.includes(value as SeverityValue);
  }
}
