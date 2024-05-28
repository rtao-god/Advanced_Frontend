import { Loader } from '@/widgets'
import { FC, ReactNode, Suspense } from 'react'

interface Props {
    children: ReactNode
}

export const PSuspense: FC<Props> = ({ children }): JSX.Element => {
    // Checking the loader operation
    /*   const [isLoading, setIsLoading] = useState(true);
  
      useEffect(() => {
          const timer = setTimeout(() => {
              setIsLoading(false);
          }, 100000);
  
          return () => clearTimeout(timer);
      }, []);
   */
    return (
        <div>
            {/* {isLoading && <Loader />} */}
            <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
    )
}
