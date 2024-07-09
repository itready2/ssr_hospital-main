'use client'

import { IoSearch } from 'react-icons/io5';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import Styles from './Search.module.scss';

const Search = () => {
    const [search, setSearch] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter()
    const pathname = usePathname()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = event.target.value;
        setSearch(searchText);
    };

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            submitSearch();
        }
    }

    const submitSearch = () => {
        router.push(pathname + '?' + createQueryString('search', search));
    };

    return (
        <label>
            <div className={Styles.container}>
                <input
                    placeholder={'ค้นหา'}  // Replace with your placeholder text
                    value={search}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                />
                <IoSearch className={Styles.icon} onClick={() => submitSearch()} />
            </div>
        </label>
    );
};

export default Search;
