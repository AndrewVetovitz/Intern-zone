import React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@material-ui/core/Typography';

import { TITLE } from '../../constants';

const title: string = TITLE + ' | About';
const content: string = TITLE + ' FAQ. Learn more about ' + TITLE +
    ' and features coming in the future!';

function About(): JSX.Element {
    const componentStyle: React.CSSProperties = { fontSize: 16, lineHeight: '1.6em' }
    const blockStyle: React.CSSProperties = { marginBottom: 25 };
    const blockHeaderStyle: React.CSSProperties = { color: '#888' };
    const customText: React.CSSProperties = { fontSize: 20, lineHeight: 1.8 };
    const headerSize: 'h4' = 'h4'

    return (
        <div style={componentStyle}>

            <Helmet defer={false}>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="Description" content={content} />
            </Helmet>

            <div style={blockStyle}>
                <Typography variant={headerSize} style={blockHeaderStyle}>
                    Intern Zone
                </Typography>
                <Typography style={customText} component="p">
                    Hi. Our mission is to provide the highest quality data and to give all those looking
                    for internships the tools they need to succeed.
                </Typography>
            </div>

            <div style={blockStyle}>
                <Typography variant={headerSize} style={blockHeaderStyle}>
                    Contact
                </Typography>
                <Typography style={customText} component="p">
                    For buisness inquiries or requests you can reach us at&nbsp;
                    <a
                        href="mailto:contact.internzone@gmail.com"
                        target="_top"
                        rel={'noopener noreferrer nofollow'}
                    >contact.internzone@gmail.com</a>
                </Typography>
            </div>

            <div style={blockStyle}>
                <Typography variant={headerSize} style={{ ...customText, ...blockHeaderStyle }}>
                    FAQ
                </Typography>

                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Question here?
                </Typography>
                <Typography component="p" style={customText}>
                    Response to question here.
                </Typography>

                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Question here?
                </Typography>
                <Typography component="p" style={customText}>
                    Response to question here.
                </Typography>

                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Question here?
                </Typography>
                <Typography component="p" style={customText}>
                    Response to question here.
                </Typography>

                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Question here?
                </Typography>
                <Typography component="p" style={customText}>
                    Response to question here.
                </Typography>
            </div>
        </div>
    );
}

export default About;
