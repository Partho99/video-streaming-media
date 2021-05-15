import faqsData from '../fixtures/faqs.json'
import {Accordion} from "../components";
import {OptForm} from "../components";

export const FaqsContainer = () => {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(({id, header, body}) => (
                <Accordion.Item key={id}>
                    <Accordion.Header>{header}</Accordion.Header>
                    <Accordion.Body>{body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item/>
            <OptForm>
                <OptForm.Input placeholder='Email Address'/>
                <OptForm.Button>Try it now</OptForm.Button>
                <OptForm.Break/>
                <OptForm.Text>
                    Ready to watch? Enter your email to create or restart your membership
                </OptForm.Text>
            </OptForm>
        </Accordion>
    )
}