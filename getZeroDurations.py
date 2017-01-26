# -*- coding: utf-8 -*-
"""Save the number of an episode if the duration is 0."""

import json
import numpy as np
import pprint


# Initialize Dictionary
missingDuration = {}

# Read 0-values at duration from JSON-file
with open('website/data/complete.json', 'r') as openfile:
    data = json.load(openfile)
    for rows in data:
        if rows['duration'] == '00:00:00':
            missingDuration[rows['number']] = rows['duration']

    # Alter values
    for key, value in missingDuration.iteritems():
        # print key
        if key == '000':
            missingDuration['000'] = '01:46:01'
        elif key == '001':
            missingDuration['001'] = '01:39:34'
        elif key == '002':
            missingDuration['002'] = '01:55:14'
        elif key == '003':
            missingDuration['003'] = '02:02:28'
        elif key == '004':
            missingDuration['004'] = '02:17:18'
        elif key == '005':
            missingDuration['005'] = '02:08:03'
        elif key == '006':
            missingDuration['006'] = '02:29:09'
        elif key == '007':
            missingDuration['007'] = '02:42:58'
        elif key == '008':
            missingDuration['008'] = '02:21:36'
        elif key == '009':
            missingDuration['009'] = '02:07:42'
        elif key == '010':
            missingDuration['010'] = '02:13:07'
        elif key == '011':
            missingDuration['011'] = '02:19:37'
        elif key == '012a':
            missingDuration['012a'] = '00:59:06'
        elif key == '012b':
            missingDuration['012b'] = '00:41:33'
        elif key == '013':
            missingDuration['013'] = '02:43:32'
        elif key == '014':
            missingDuration['014'] = '01:59:41'
        elif key == '015':
            missingDuration['015'] = '02:30:15'
        elif key == '016':
            missingDuration['016'] = '02:46:53'
        elif key == '017':
            missingDuration['017'] = '02:29:01'
        elif key == '018':
            missingDuration['018'] = '02:44:20'
        elif key == '019':
            missingDuration['019'] = '02:18:56'
        elif key == '020':
            missingDuration['020'] = '02:27:10'
        elif key == '021':
            missingDuration['021'] = '02:51:22'
        elif key == '022':
            missingDuration['022'] = '02:18:16'
        elif key == '023':
            missingDuration['023'] = '02:49:37'
        elif key == '024':
            missingDuration['024'] = '02:37:09'
        elif key == '025':
            missingDuration['025'] = '02:34:52'
        elif key == '026':
            missingDuration['026'] = '02:44:25'
        elif key == '027':
            missingDuration['027'] = '02:37:43'
        elif key == '028':
            missingDuration['028'] = '02:56:38'
        elif key == '029':
            missingDuration['029'] = '03:14:28'
        elif key == '030':
            missingDuration['030'] = '02:19:35'
        elif key == '031':
            missingDuration['031'] = '02:55:49'
        elif key == '032':
            missingDuration['032'] = '03:12:45'
        elif key == '033':
            missingDuration['033'] = '02:17:02'
        elif key == '034':
            missingDuration['034'] = '02:52:31'
        elif key == '035':
            missingDuration['035'] = '02:36:32'
        elif key == '036':
            missingDuration['036'] = '03:40:17'
        elif key == '037':
            missingDuration['037'] = '03:07:41'
        elif key == '038':
            missingDuration['038'] = '02:50:01'
        elif key == '039':
            missingDuration['039'] = '03:01:35'
        elif key == '040':
            missingDuration['040'] = '03:39:16'
        elif key == '041':
            missingDuration['041'] = '01:48:45'
        elif key == '042':
            missingDuration['042'] = '03:37:21'
        elif key == '043':
            missingDuration['043'] = '02:46:26'
        elif key == '044':
            missingDuration['044'] = '02:46:05'
        elif key == '045':
            missingDuration['045'] = '03:08:51'
        elif key == '046':
            missingDuration['046'] = '02:59:17'
        elif key == '047':
            missingDuration['047'] = '02:46:31'
        elif key == '048':
            missingDuration['048'] = '03:14:36'
        elif key == '049':
            missingDuration['049'] = '03:21:24'
        elif key == '077':
            missingDuration['077'] = '03:13:03'
        else:
            print "Something went terribly wrong!"


# Save file with altered values
np.save('website/data/missingduration.npy', missingDuration)
pprint.pprint(missingDuration)

# Read file with updated 0-values to alter JSON-file
# readDuration = np.load('website/data/missingduration.npy').item()
# pprint.pprint(readDuration)
