import { useQuery } from '@tanstack/react-query';
import { DataTable } from 'mantine-datatable';
import { getGames } from '../../api/games';
import { useMemo } from 'react';
import ResultChip from '../Base/ResultChip';

export default function GamesTable() {
    const { data, isPending, isError } = useQuery(getGames());

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

    const games = data.data || [];

    return (
        <div id="games-table">
            <DataTable
                columns={columns}
                records={games}
                page={data.page}
                totalRecords={data.total}
                recordsPerPage={data.per_page}
                onPageChange={(p) => console.log('Change to page', p)}
                fetching={isPending}
            />
        </div>
    )
}