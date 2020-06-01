Feature('contact');

Scenario('test something', (I) => {
    I.amOnPage('https://www.dotmodus.com');
    I.see('Contact Us');
    I.click('Schedule a session');
    I.fillField('First Name', 'Dineo');
    I.fillField('Surname', 'Mabitle');
    I.fillField('Email', 'Dineo@dotmodus.com');
    I.fillField('Contact Number', '0546874123');
    I.click('Submit', { css: 'button' });
    // I.click(locate('.button').withText('Submit'));
    I.wait(20);
    //I.click('Submit');
    After(pause)
        //I.seeElement({ css: 'id.logo' });
        // I.see('//button[contains(., "Book a Call")]');
});