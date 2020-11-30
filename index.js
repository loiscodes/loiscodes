const date = Date.now();
            const getDate = new Date(date);
            console.log('Github: ', getDate.getHours());
            console.log('UTC: ', getDate.getUTCHours());
            console.log('minutes: ', getDate.getMinutes());
            console.log('Timezone offset: ', getDate.getTimezoneOffset());