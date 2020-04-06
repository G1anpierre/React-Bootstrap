import React from 'react';

function faq(props) {
    const { faq, toggle, id } = props;

    return (
        <div className={"faq " + (faq.open ? 'open' : '')}>
            <div className="faq-question" onClick={(_ => toggle(id))}>
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>

        </div>
    )
}

export default faq;