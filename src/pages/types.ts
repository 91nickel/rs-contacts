import {State} from 'src/types/common';
import {ContactDto} from 'src/types/dto/ContactDto';
import {FavouriteContactsDto} from 'src/types/dto/FavouriteContactsDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';

export interface CommonPageProps {
  contactsState: State<ContactDto[]>,
  favouriteContactsState: State<FavouriteContactsDto>
  groupContactsState: State<GroupContactsDto[]>
}
