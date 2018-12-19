import { Request, Response, NextFunction } from 'express';

const google = (req: Request, res: Response, next: NextFunction) => {
    const io = req.app.get('io');

    io.in(req.session.socketId).emit('google', req.user);
    res.end();
};

const facebook = (req: Request, res: Response, next: NextFunction) => {
    const io = req.app.get('io');

    io.in(req.session.socketId).emit('facebook', req.user);
    res.end();
};

const linkedin = (req: Request, res: Response, next: NextFunction) => {
    const io = req.app.get('io');

    io.in(req.session.socketId).emit('linkedin', req.user);
    res.end();
};

const github = (req: Request, res: Response, next: NextFunction) => {
    const io = req.app.get('io');

    io.in(req.session.socketId).emit('github', req.user);
    res.end();
};

export { google, facebook, linkedin, github };
