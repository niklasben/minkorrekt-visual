# -*- coding: utf-8 -*-
"""Save the number of an episode if the duration is 0."""

import json
import pprint
import numpy as np


missingDuration = {}

# Read 0-values at duration from JSON-file
with open('website/data/complete.json') as openfile:
    d = json.load(openfile)
    for rows in d:
        if rows['duration'] == '00:00:00':
            missingDuration[rows['number']] = rows['duration']

    # Alter values
    for key, value in missingDuration.iteritems():
        # print key
        if key == '000':
            missingDuration['000'] = ''
        elif key == '001':
            missingDuration['001'] = ''
        elif key == '002':
            missingDuration['002'] = ''
        elif key == '003':
            missingDuration['003'] = ''
        elif key == '004':
            missingDuration['004'] = ''
        elif key == '005':
            missingDuration['005'] = ''
        elif key == '006':
            missingDuration['006'] = ''
        elif key == '007':
            missingDuration['007'] = ''
        elif key == '008':
            missingDuration['008'] = ''
        elif key == '009':
            missingDuration['009'] = ''
        elif key == '010':
            missingDuration['010'] = ''
        elif key == '011':
            missingDuration['011'] = ''
        elif key == '012a':
            missingDuration['012a'] = ''
        elif key == '012b':
            missingDuration['012b'] = ''
        elif key == '013':
            missingDuration['013'] = ''
        elif key == '014':
            missingDuration['014'] = ''
        elif key == '015':
            missingDuration['015'] = ''
        elif key == '016':
            missingDuration['016'] = ''
        elif key == '017':
            missingDuration['017'] = ''
        elif key == '018':
            missingDuration['018'] = ''
        elif key == '019':
            missingDuration['019'] = ''
        elif key == '020':
            missingDuration['020'] = ''
        elif key == '021':
            missingDuration['021'] = ''
        elif key == '022':
            missingDuration['022'] = ''
        elif key == '023':
            missingDuration['023'] = ''
        elif key == '024':
            missingDuration['024'] = ''
        elif key == '025':
            missingDuration['025'] = ''
        elif key == '026':
            missingDuration['026'] = ''
        elif key == '027':
            missingDuration['027'] = ''
        elif key == '028':
            missingDuration['028'] = ''
        elif key == '029':
            missingDuration['029'] = ''
        elif key == '030':
            missingDuration['030'] = ''
        elif key == '031':
            missingDuration['031'] = ''
        elif key == '032':
            missingDuration['032'] = ''
        elif key == '033':
            missingDuration['033'] = ''
        elif key == '034':
            missingDuration['034'] = ''
        elif key == '035':
            missingDuration['035'] = ''
        elif key == '036':
            missingDuration['036'] = ''
        elif key == '037':
            missingDuration['037'] = ''
        elif key == '038':
            missingDuration['038'] = ''
        elif key == '039':
            missingDuration['039'] = ''
        elif key == '040':
            missingDuration['040'] = ''
        elif key == '041':
            missingDuration['041'] = ''
        elif key == '042':
            missingDuration['042'] = ''
        elif key == '043':
            missingDuration['043'] = ''
        elif key == '044':
            missingDuration['044'] = ''
        elif key == '045':
            missingDuration['045'] = ''
        elif key == '046':
            missingDuration['046'] = ''
        elif key == '047':
            missingDuration['047'] = ''
        elif key == '048':
            missingDuration['048'] = ''
        elif key == '049':
            missingDuration['049'] = ''
        elif key == '077':
            missingDuration['077'] = ''
        else:
            print "Something went terribly wrong!"


# Save file with altered values
# np.save('website/data/missingduration.npy', missingDuration)
pprint.pprint(missingDuration)

# Read file with 0-values to alter JSON-file
# readDuration = np.load('website/data/missingduration.npy').item()
