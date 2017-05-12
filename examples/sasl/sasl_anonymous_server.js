/*
 * Copyright 2015 Red Hat Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var container = require('rhea');
var args = require('minimist')(process.argv.slice(2),
    {
        number: ['port'],
        alias: { p: 'port' },
        default: { port: 5672 },
    }
);

container.sasl_server_mechanisms.enable_anonymous();
var server = container.listen({'port':args.port});
container.on('connection_open', function (context) {
    console.log('Connected!');
});
