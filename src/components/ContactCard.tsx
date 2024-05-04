import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, ListGroup } from 'react-bootstrap'
import { ContactDto } from 'src/types/dto/ContactDto'
import { RoutesList } from 'src/routes'
import { observer } from 'mobx-react-lite'
import store, { StoreList } from 'src/store'

interface ContactCardProps {
    contact: ContactDto,
    withLink?: boolean,
}

export const ContactCard = observer((
    {
        contact: {photo, id, name, phone, birthday, address},
        withLink,
    }: ContactCardProps) => {

        const favouritesStore = store[StoreList.favourites]
        const {data: favourites, isLoading} = favouritesStore

        const isInFavourites = favourites.includes(id)

        function handleFavourites() {
            if (isInFavourites) {
                favouritesStore.remove(id)
            } else {
                favouritesStore.add(id)
            }
        }

        return (
            <Card key={id}>
                <Card.Img variant="top" src={photo}/>
                <Card.Body>
                    <Card.Title>
                        {withLink ? <Link to={`/${RoutesList.contacts}/${id}`}>{name}</Link> : name}
                    </Card.Title>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item><Link to={`tel:${phone}`} target="_blank">{phone}</Link></ListGroup.Item>
                            <ListGroup.Item>{birthday}</ListGroup.Item>
                            <ListGroup.Item>{address}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                    <Button variant="success" onClick={handleFavourites} disabled={isLoading}>
                        {isInFavourites ? '-' : '+'}
                    </Button>
                </Card.Body>
            </Card>
        )
    },
)
