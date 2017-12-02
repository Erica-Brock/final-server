import * as bcrypt from 'bcrypt';

const saltRounds = 12;

export const hashSaltPassword = (pw: string) => {
    return bcrypt.hashSync(pw, saltRounds);
};

export const comparePassword = (pw: string, hash: string) => {
    return bcrypt.compareSync(pw, hash);
};