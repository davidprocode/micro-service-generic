export class Content {
  private readonly content: string;

  public get value(): string {
    return this.content;
  }

  validateLength(content: string): boolean {
    return content.length > 5 && content.length < 240;
  }

  constructor(value: string) {
    const isValidLength = this.validateLength(value);

    if (!isValidLength) throw new Error('Length Error');
    this.content = value;
  }
}
