import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
    background-color: var(--color-ui-base);
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 1.5rem;

    @media(min-width: 767px) {
        margin-bottom: 1rem;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country'
})`
    width: 100%;
    margin-left: 2rem;
    border: none;
    outline: none;
    background-color: var(--colors-bg);
    color: var(--color-text);
`;

const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={e => setSearch(e.target.value)} value={search} />
        </InputContainer>
    )
}

export { Search };
