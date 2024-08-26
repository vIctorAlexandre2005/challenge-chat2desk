type DetailsProps = {
  title: string;
  value: string;
};

export function DetailsComponent({ title: detailTitle, value: detailValue }: DetailsProps) {
  return (
    <p className="flex flex-col">
      <span className="font-bold">{detailTitle}:</span>
      <span>{detailValue}</span>
    </p>
  );
}
