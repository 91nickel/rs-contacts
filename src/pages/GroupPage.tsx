import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { GroupContactsCard } from 'src/components/GroupContactsCard'
import { Empty } from 'src/components/Empty'
import { ContactCard } from 'src/components/ContactCard'

import { useGetContactQuery } from 'src/store/contact'
import { useGetGroupContactsQuery } from 'src/store/group'

export const GroupPage = memo(() => {
    const {groupId} = useParams<{ groupId: string }>()

    // const groupContacts = useSelector(Selector[ReducersList.groupContacts].byId(groupId as GroupContactsDto['id']))!
    const {data: groupContactsList} = useGetGroupContactsQuery()
    const {data: contactsList} = useGetContactQuery()

    if (!contactsList || !groupContactsList) {
        return <h2>Loading...</h2>
    }

    const groupContacts = groupContactsList.find(gc => gc.id === groupId)

    if (!groupContacts) {
        return <Empty/>
    }

    const contacts = contactsList.filter(c => groupContacts.contactIds.includes(c.id))

    return (
        <Row className="g-4">
            <Col xxl={12}>
                <Row xxl={3}>
                    <Col className="mx-auto">
                        <GroupContactsCard groupContacts={groupContacts}/>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
})
