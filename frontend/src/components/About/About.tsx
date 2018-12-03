import * as React from 'react';

import Typography from '@material-ui/core/Typography';

function About(): JSX.Element {
    const headerSize: 'h2' = 'h2';

    return (
        <div style={{fontSize: 16, lineHeight: '1.6em'}}>
            <div style={{marginBottom: 20}}>
                <Typography variant="h5" style={{color: '#888'}} component={headerSize}>
                Intern Zone
                </Typography>
                <Typography component="p">
                Hi. Our mission is to provide the highest quality and to give all those looking for internships the tools they need to succeed. 
                </Typography>
            </div>

            <div style={{marginBottom: 20}}>
                <Typography variant="h5" style={{color: '#888'}} component={headerSize}>
                Contact
                </Typography>
                <Typography component="p">
                Hi. Our mission is to provide the highest quality and to give all those looking for internships the tools they need to succeed. 
                </Typography>
            </div>

            <div style={{marginBottom: 20}}>
                <Typography variant="h5" style={{color: '#888'}} component={headerSize}>
                FAQ
                </Typography>
                <Typography component="p">
                Hi. Our mission is to provide the highest quality and to give all those looking for internships the tools they need to succeed. 
                </Typography>
            </div>
        </div>
    );
}

export default About;

// Intern Supply

// Welcome to Intern Supply, a community designed to help Computer Science students find internships. We exist because we believe students can intern at any company, no matter what school they come from.

// Contact Us

// For business inquiries, to request a company, tell us about a cool feature you want, ask us a question, or just say hi please reach contact.internsupply@gmail.com.

// FAQ

// What applications are allowed on Intern Supply?
// Intern Supply hosts applications for paid summer internships in the United States that are hiring undergraduate Computer Science/Software Engineering students.

// Will you host applications for other types of jobs?
// Currently we curate our selection for Computer Science students, but may expand in the future.

// What does it mean that a job is unavailable?
// An unavailable company is one that is not currently hiring summer interns, but may in the future. When that company posts an application, it will become available on Intern Supply.

// Amazon Affiliate Notice
// We are a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for us to earn fees by linking to Amazon.com and affiliated sites.