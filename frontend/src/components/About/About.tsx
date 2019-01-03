import React from 'react';
import { Helmet } from 'react-helmet';

import Typography from '@material-ui/core/Typography';

import { TITLE } from '../../constants';

const title: string = TITLE + ' | About';
const content: string = TITLE + ' FAQ. Learn more about ' + TITLE +
    ' and features coming in the future!';

const blockStyle: React.CSSProperties = { marginBottom: 25 };
const blockHeaderStyle: React.CSSProperties = { color: '#888' };
const customText: React.CSSProperties = { fontSize: 20, lineHeight: 1.8 };
const headerSize: 'h4' = 'h4'

function About(): JSX.Element {
    return (
        <>
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

            <Typography variant={headerSize} style={{ ...customText, ...blockHeaderStyle }}>
                FAQ
            </Typography>

            <div style={blockStyle}>
                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Who is this website for?
                </Typography>
                <Typography component="p" style={customText}>
                    Anyone and everyone looking for internships.
                </Typography>
            </div>

            <div style={blockStyle}>
                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Why should I sign-up?
                </Typography>
                <Typography component="p" style={customText}>
                    Currently signing up does not do very much however later there will be more features
                    such as company tracking added.
                </Typography>
            </div>

            <div style={blockStyle}>
                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    What type of internships are posted?
                </Typography>
                <Typography component="p" style={customText}>
                    Currently technology based internships, but will will later add finance and STEM fields as well.
                </Typography>
            </div>

            <div style={blockStyle}>
                <Typography variant="h6" style={{ ...customText, ...blockHeaderStyle }}>
                    Can I asked for a company to be added
                </Typography>
                <Typography component="p" style={customText}>
                    Right at this&nbsp;
                    <a
                        href="https://goo.gl/forms/YiYI70LSWnYZjRyV2"
                        target="_top"
                        rel={'noopener noreferrer nofollow'}
                    >link</a>.
                </Typography>
            </div>
        </>
    );
}

export default About;
