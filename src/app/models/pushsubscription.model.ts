export class PushSubscription {
    public _id: string;
    public endpoint: string;
    public expirationTime: string;
    public keys: KeyObject;
}
export class KeyObject {
    public p256dh: string;
    public auth: string;
}