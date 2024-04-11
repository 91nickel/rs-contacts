import React, { memo } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { useAppSelector } from 'src/store/hooks'

function filter(contacts: ContactDto[], groupContacts: GroupContactsDto[], filterValue: Partial<FilterFormValues>) {

    if (!Object.keys(filterValue).length) {
        return contacts
    }

    let findContacts = contacts

    if (filterValue.name) {
        const fvName = filterValue.name.toLowerCase()
        findContacts = findContacts.filter(({name}) => (
            name.toLowerCase().indexOf(fvName) > -1
        ))
    }

    if (filterValue.groupId) {
        const findGroupContacts = groupContacts.find(({id}) => id === filterValue.groupId)

        if (findGroupContacts) {
            findContacts = findContacts.filter(({id}) => (
                findGroupContacts.contactIds.includes(id)
            ))
        }
    }

    return findContacts
}

export const ContactListPage = memo(() => {

    const contacts = useAppSelector((state) => state.contacts)
    const groupContacts = useAppSelector((state) => state.groupContacts)
    const contactsFilter = useAppSelector((state) => state.contactsFilter)

    const contactsFiltered = filter(contacts, groupContacts, contactsFilter)

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm />
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contactsFiltered.map((contact: ContactDto) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
})
