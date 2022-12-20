import { Content } from '../value-objects/content';

export interface NotificationProps {
  content: Content;
  recipientId: string;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private props: NotificationProps;
  constructor(props: NotificationProps) {
    this.props = props;
  }

  public get content(): Content {
    return this.props.content;
  }
  public set content(value: Content) {
    this.props.content = value;
  }

  public get category(): string {
    return this.props.category;
  }
  public set category(value: string) {
    this.props.category = value;
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
  }
  public set readAt(value: Date | undefined | null) {
    this.props.readAt = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
