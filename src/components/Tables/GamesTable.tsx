import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'mantine-datatable';
import { getGames } from '../../api/games';
import { useEffect, useMemo, useState } from 'react';
import ResultChip from '../Base/ResultChip';

const PAGE_SIZE = 50;

export default function GamesTable() {
    const { data, isPending, isError } = useQuery(getGames());
    const [page, setPage] = useState(1);
    const [games, setGames] = useState([])

    useEffect(() => {
        if (data) {
            const from = (page - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE;
            setGames(data.slice(from, to));
        }
  }, [page, data]);

    const columns = useMemo(() => [
        { accessor: 'white'},
        { accessor: 'black' },
        { accessor: 'result', render: ({ result }) => <ResultChip result={result} /> },
        { accessor: 'date' },
        { accessor: 'tournament'},
    ], [
    ])

    if (isPending) return <div>Loading...</div>;
    if (isError) return <div>Error loading games</div>;

    return (
        <div id="games-table">
            <DataTable
                columns={columns}
                records={games}
                page={page}
                totalRecords={data.length}
                recordsPerPage={PAGE_SIZE}
                onPageChange={(p) => setPage(p)}
                fetching={isPending}
                height="calc(100vh - 100px)"
            />
        </div>
    )
}