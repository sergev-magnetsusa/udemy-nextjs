import NewsList from '@/components/news/NewsList';
import {getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear, getNewsForYearAndMonth} from '@/lib/news';
import Link from 'next/link';
import {Suspense} from 'react';

const FilteredNews = async ({year, month}) => {
  if (!year) return <p>Please select a year.</p>;

  const news = await(!month ? getNewsForYear(year) : getNewsForYearAndMonth(year, month));

  if (!news) return <p>No news found for the selected period.</p>

  return <NewsList news={news}/>;
}

const FilteredLinks = async ({year, month}) => {
  const allYears = await getAvailableNewsYears();

  const links = month ? [] :
    year ? getAvailableNewsMonths(year) : allYears;

  if (
    year && !allYears.includes(year)
    || (month && !(getAvailableNewsMonths(year)).includes(month))
  ) {
    throw new Error('Invalid filter.');
  }

  return (
    <header id={'archive-header'}>
      <nav>
        <ul>
          {links.map((link, index) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

const FilteredNewsPage = async ({params}) => {
  const {filter} = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return <>
    <Suspense fallback={<p>Loading filter...</p>}>
      <FilteredLinks year={selectedYear} month={selectedMonth}/>
    </Suspense>
    <Suspense fallback={<p>Loading news...</p>}>
      <FilteredNews year={selectedYear} month={selectedMonth}/>
    </Suspense>
  </>
}

export default FilteredNewsPage