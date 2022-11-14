interface PaginationTableProps {
  participantsPerPage: number;
  totalParticipants: number;
  paginate: (pageNumber: number) => void;
}

export function PaginationTable({
  participantsPerPage,
  totalParticipants,
  paginate,
}: PaginationTableProps) {
  const pageNumbers = [];

  for (
    let i = 1;
    i <= Math.ceil(totalParticipants / participantsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="inline-flex items-center gap-2 -space-x-px">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className="py-2 px-2 sm:px-4 leading-tight text-blue-marine rounded-md bg-white border-gray-200 hover:bg-blue-marine hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white shadow-md shadow-black/30"
          >
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
