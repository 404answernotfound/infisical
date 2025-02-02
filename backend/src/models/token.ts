import { Schema, model } from 'mongoose';
import { EMAIL_TOKEN_LIFETIME } from '../config';

export interface IToken {
	email: String;
	token: String;
	createdAt: Date;
}

const tokenSchema = new Schema<IToken>({
	email: {
		type: String,
		required: true
	},
	token: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		expires: EMAIL_TOKEN_LIFETIME,
		default: Date.now
	}
});

const Token = model<IToken>('Token', tokenSchema);

export default Token;
