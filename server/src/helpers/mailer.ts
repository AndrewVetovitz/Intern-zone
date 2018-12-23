import nodemailer from 'nodemailer';

export default class MailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'andrewvetovitz@gmail.com',
                pass: '14anvetovitz'
            }
        }
        );
    }

    public sendEmail(subject: string, message: string) {
        this.transporter.sendMail({
            from: 'andrewvetovitz@gmail.com',
            to: 'andrewvetovitz@gmail.com',
            subject: subject,
            text: message
        }, (response: any, error: any) => {
            console.log(response);
            console.log(error);
        });
    }
}
