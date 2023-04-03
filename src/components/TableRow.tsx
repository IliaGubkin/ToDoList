export function TableRow({ data }: { data: number[] }) {
    return (
        <>
            {data.map((el) => (
                <td className="table-data">{el}</td>
            ))}
        </>
    )
}