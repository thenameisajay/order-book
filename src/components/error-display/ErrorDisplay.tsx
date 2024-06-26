import { Warning } from '@phosphor-icons/react';

import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/card';

export default function ErrorDisplay({ refetch }: { refetch: () => void }) {
    const errorMessage = 'Error fetching data, please try again later';

    return (
        <div className="4  md:bottom-50 absolute  bottom-10 flex w-full flex-col items-center justify-center  sm:bottom-44">
            <Card className="mx-4 flex flex-col items-center justify-center">
                <div className="mx-auto flex flex-col items-center px-4 text-center ">
                    <Warning
                        size={75}
                        className="m-2"
                        weight="bold"
                        color="#ec0909"
                    />
                    <h3 className="text-base font-semibold  text-red-500 md:text-2xl">
                        {errorMessage}
                    </h3>
                </div>
                <Button
                    onClick={refetch}
                    variant={'outline'}
                    className="m-4 rounded-md  p-2 text-lg font-semibold"
                >
                    Retry
                </Button>
            </Card>
        </div>
    );
}
