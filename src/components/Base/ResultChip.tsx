import { Badge } from '@mantine/core';

import { GameResult } from "../../enums";

// Display a badge, change style based on result (badge css variables)
const badgeStyles: Record<GameResult, { backgroundColor: string; color: string; fontSize?: string }> = {
    '1-0': { backgroundColor: 'white', color: 'black', },
    '0-1': { backgroundColor: 'black', color: 'white' },
    '1/2-1/2': { backgroundColor: 'gray', color: 'white', fontSize: '0.5rem' },
}

const renderResult = (result: GameResult | null) => {
    if (result === GameResult.Draw) {
        return '½-½';
    }

    return result;
}

export default function ResultChip({ result }: { result: GameResult | null }) {
    if (!result) {
        return <Badge color="gray">N/A</Badge>;
    }

    return (
        <Badge radius="sm"style={badgeStyles[result]}>
            {renderResult(result)}
        </Badge>
    );
}