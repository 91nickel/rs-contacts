import React from 'react';
import { useSelector } from 'react-redux'
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';

import { selector } from 'src/store/contacts'
import { ContactDto } from 'src/types/dto/ContactDto'

export const ContactPage = () => {

  const {contactId} = useParams<{ contactId: string }>();

  const contact = useSelector(selector.byId(contactId as ContactDto['id']))

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
