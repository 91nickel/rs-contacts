import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'

import { ContactCard } from 'src/components/ContactCard'
import { FilterForm, FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

import { Selector, ReducersList } from 'src/store'
import { useGetContactQuery } from 'src/store/contact'
import { useGetGroupContactsQuery } from 'src/store/group'

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

    // const contacts = useSelector(Selector[ReducersList.contacts].get())
    const {data: contacts} = useGetContactQuery()
    const {data: groupContacts} = useGetGroupContactsQuery()

    const contactsFilter = useSelector(Selector[ReducersList.contactsFilter].get())

    if (!contacts || !groupContacts) {
        return <h2>Loading...</h2>
    }

    const contactsFiltered = filter(contacts, groupContacts, contactsFilter)

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm/>
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
