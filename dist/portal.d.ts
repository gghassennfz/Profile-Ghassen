import { ReactProfileProps } from './types';
import { EXPORT_OBJECT } from 'react-pixels';
export declare const openEditor: (props: ReactProfileProps) => Promise<{
    done: boolean;
    cancel: boolean;
    editedImage?: EXPORT_OBJECT | undefined;
}>;
