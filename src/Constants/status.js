class status {
    TODO = 1;
    PROCESS = 2;
    COMPLETED = 3;
    getClass(status) {
        switch (status) {
            case this.TODO:
                return 'todo';
            case this.PROCESS:
                return 'process';
            case this.COMPLETED:
                return 'completed';
            default:
                return '';
        }
    }
    getDisplayName(status) {
        switch (status) {
            case this.TODO:
                return 'Todo';
            case this.PROCESS:
                return 'Processing';
            case this.COMPLETED:
                return 'Completed';
            default:
                return '';
        }
    }
}
export default new status();
